import React from 'react';
import './FilterPanel.css';

const FilterPanel = ({
    selectedTypes,
    setSelectedTypes,
    selectedCapacities,
    setSelectedCapacities,
    maxPrice,
    setMaxPrice,
    availableTypes,
    availableCapacities,
    absoluteMaxPrice,
    onReset
}) => {
    const toggleSelection = (name, list, setList) => {
        setList(prevList =>
            prevList.includes(name)
                ? prevList.filter(item => item !== name)
                : [...prevList, name]
        );
    };

    const handlePriceChange = (e) => {
        setMaxPrice(Number(e.target.value));
    };

    return (
        <div className="filter-container">
            <div className="filter-group">
                <h4>TYPE</h4>
                {availableTypes.map(type => (
                    <label className='filter-label' key={type.name}>
                        <input
                            type="checkbox"
                            checked={selectedTypes.includes(type.name)}
                            onChange={() => toggleSelection(type.name, selectedTypes, setSelectedTypes)}
                            disabled={type.count === 0}
                        />
                        <span className={type.count === 0 ? 'disabled' : ''}>
                            {type.name}
                        </span>
                        <span style={{ color: '#90A3BF' }}>({type.count})</span>
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4>CAPACITY</h4>
                {availableCapacities.map(capacity => (
                    <label className='filter-label' key={capacity.name}>
                        <input
                            type="checkbox"
                            checked={selectedCapacities.includes(capacity.name)}
                            onChange={() => toggleSelection(capacity.name, selectedCapacities, setSelectedCapacities)}
                            disabled={capacity.count === 0}
                        />
                        <span className={capacity.count === 0 ? 'disabled' : ''}>
                            {capacity.name} Person
                        </span>
                        <span style={{ color: '#90A3BF' }}>({capacity.count})</span>
                    </label>
                ))}
            </div>

            <div className="filter-group price-slider">
                <h4>PRICE</h4>
                <input
                    type="range"
                    min="0"
                    max={absoluteMaxPrice}
                    value={maxPrice}
                    onChange={handlePriceChange}
                    className="slider"
                    step="100"
                />
                <span className="price-value">Max. ${maxPrice}</span>
            </div>

            <div className="filter-header">
                <h4>FILTERS</h4>
                <button onClick={onReset} className="reset-button">
                    Reset All
                </button>
            </div>
        </div>
    );
};

export default FilterPanel;