import React from "react";
import Image from "next/image";
import styled from "styled-components";
//Components
import Input from "@/components/UI/Input";

const SearchFormWrap = styled.div`
  padding: 10px;
  height: 65px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  background-color: #fff;
  overflow: hidden;
  @media ${({ theme }) => theme.device.small} {
    width: 100%;
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
      <Input placeholder="검색어 입력" />
    </SearchFormWrap>
  );
};

export default SearchForm;
