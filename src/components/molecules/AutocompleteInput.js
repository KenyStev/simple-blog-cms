import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { Input } from "../atoms/Input";
import styled from "styled-components";
import { DropdownList } from "../atoms/DropdownList";
import { DropdownItem } from "../atoms/DropdownItem";

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const AutocompleteInput = forwardRef(({ options, onSelect }, ref) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const filterValue = useCallback(
    (value) => {
      const filtered = options.filter((option) =>
        option.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    },
    [options]
  );

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    filterValue(value);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setFilteredOptions([]);
    setInputValue(option.title);
  };

  useImperativeHandle(
    ref,
    () => ({
      trigger: () => filterValue(inputValue),
    }),
    [inputValue, filterValue]
  );

  return (
    <Wrapper>
      <Input type='text' value={inputValue} onChange={handleInputChange} />
      {filteredOptions.length > 0 && (
        <DropdownList>
          {filteredOptions.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option.title}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Wrapper>
  );
});
