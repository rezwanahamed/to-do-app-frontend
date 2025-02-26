import useSWR, { mutate } from "swr";
import axiosInstance from "../lib/config/axiosInstance";

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export function useData(endpoint) {
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  return {
    data,
    isLoading,
    isError: !!error,
  };
}

export function useCreate() {
  const create = async (endpoint, data) => {
    try {
      const response = await axiosInstance.post(endpoint, data);

      // Update the cache for this endpoint
      mutate(endpoint);

      return response.data;
    } catch (error) {
      console.error("Create error:", error);
      throw error;
    }
  };

  return { create };
}

export function useUpdate() {
  const update = async (endpoint, id, data) => {
    try {
      const itemEndpoint = `${endpoint}/${id}`;
      const response = await axiosInstance.put(itemEndpoint, data);

      // Update the cache for this specific item
      mutate(itemEndpoint);
      // Also update the collection
      mutate(endpoint);

      return response.data;
    } catch (error) {
      console.error("Update error:", error);
      throw error;
    }
  };

  // Simple real-time setup using EventSource
  const setupRealtime = (endpoint, callback) => {
    if (typeof window === "undefined" || !window.EventSource) {
      return () => {};
    }

    // Use the base URL from axiosInstance if available
    const baseUrl = axiosInstance.defaults.baseURL || "";
    const eventSource = new EventSource(`${baseUrl}/events${endpoint}`);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Update the UI with the new data
      callback(data);
      // Update the SWR cache
      mutate(endpoint);
    };

    // Return cleanup function
    return () => eventSource.close();
  };

  return { update, setupRealtime };
}

export function useDelete() {
  const remove = async (endpoint, id) => {
    try {
      const itemEndpoint = `${endpoint}/${id}`;
      await axiosInstance.delete(itemEndpoint);

      // Update the cache for this specific item (mark as undefined/deleted)
      mutate(itemEndpoint, undefined, false);
      // Update the collection after deletion
      mutate(endpoint);

      return true;
    } catch (error) {
      console.error("Delete error:", error);
      throw error;
    }
  };

  return { remove };
}

export default function useCrud(endpoint) {
  const { data, isLoading, isError } = useData(endpoint);
  const { create } = useCreate();
  const { update, setupRealtime } = useUpdate();
  const { remove } = useDelete();

  return {
    data,
    isLoading,
    isError,
    create: (data) => create(endpoint, data),
    update: (id, data) => update(endpoint, id, data),
    remove: (id) => remove(endpoint, id),
    setupRealtime: (callback) => setupRealtime(endpoint, callback),
  };
}
