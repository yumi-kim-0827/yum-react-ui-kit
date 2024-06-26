import React from "react";
import Image from "next/image";
import styled from "styled-components";

const SearchFormWrap = styled.div`
  padding: 10px;
  height: 65px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  background-color: #fff;
  @media ${({ theme }) => theme.device.small} {
    width: 100%;
  }
`;

const InputFormWrap = styled.input`
  padding: 10px;
  flex: 1 0 auto;
  font-size: 18px;
  border-bottom: 1px solid transparent;
  &:focus {
    border-bottom: 1px solid #955a8e;
  }
`;

const SearchForm = () => {
  return (
    <SearchFormWrap>
      <Image
        src="/images/i_search.svg"
        alt="search icon"
        width={20}
        height={20}
      />
      <InputFormWrap placeholder="찾으실 내용을 입력해주세요." />
    </SearchFormWrap>
  );
};

export default SearchForm;
