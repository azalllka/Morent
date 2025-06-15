const API_BASE = 'http://localhost:5121/Cars';

export const fetchAllCars = async () => {
    const response = await fetch(`${API_BASE}/GetAllCars`);
    if (!response.ok) throw new Error('Failed to fetch cars');
    return response.json();
};

export const fetchFilteredCars = async (filters) => {
    const params = new URLSearchParams();
    if (filters.searchQuery) params.append('search', filters.searchQuery);
    filters.selectedTypes?.forEach(type => params.append('categories', type));
    filters.selectedCapacities?.forEach(cap => params.append('capacities', cap.replace(' Person', '')));
    params.append('maxPrice', filters.maxPrice?.toString() || '100');

    const response = await fetch(`${API_BASE}/GetFilteredCars?${params}`);
    if (!response.ok) throw new Error('Failed to fetch filtered cars');
    return response.json();
};

export const fetchFilterOptions = async () => {
    const response = await fetch(`${API_BASE}/GetFilterOptions`);
    if (!response.ok) throw new Error('Failed to fetch filter options');
    return response.json();
};