"use client";
import React, { useEffect, useRef } from "react";
import useCustomSelect from "../../customHooks/useCustomSelect";

const SelectComponent = ({ options, placeholder, open, customClass, onSelect, value }) => {
  const {
    isOpen,
    selectedOption,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectOption,
  } = useCustomSelect(options, open);

  const dropdownRef = useRef(null);

  useEffect(() => {
    // Update selectedOption when the value prop changes
    if (value === "") {
      selectOption(null); // Reset the internal state to null
    } else {
      selectOption(value); // Synchronize with the parent value
    }
  }, [value]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionSelect = (option) => {
    selectOption(option);
    openDropdown();
    if (onSelect) {
      onSelect(option);
    }
  };

  const dropdownClassName = `nice-select ${customClass || ""} ${isOpen ? "open" : ""}`;

  return (
    <div className={dropdownClassName} tabIndex="0" onClick={toggleDropdown} ref={dropdownRef}>
      <span className="current">{selectedOption || placeholder}</span>
      <ul className="list">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option${selectedOption === option ? " selected focus" : ""}`}
            data-value={index}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectComponent;