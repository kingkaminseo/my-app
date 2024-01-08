import React, { useState } from "react";
import styled from "styled-components";

const Content = () => {
  const [englishWord, setEnglishWord] = useState("");
  const [koreanWord, setKoreanWord] = useState("");
  const [description, setDescription] = useState("");
  const [example, setExample] = useState("");
  const [wordList, setWordList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    // 모든 입력 필드가 비어있으면 등록하지 않음
    if (!(englishWord || koreanWord || description || example)) {
      return;
    }

    // 새로운 단어 객체 생성
    const newWord = {
      englishWord,
      koreanWord,
      description,
      example,
    };

    // 기존 목록에 새로운 단어 추가
    setWordList((currentList) => [newWord, ...currentList]);

    // 입력 필드 초기화
    setEnglishWord("");
    setKoreanWord("");
    setDescription("");
    setExample("");
  };

  return (
    <Container>
      <h1 style={{ color: "white" }}>단어장</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="영어 단어를 입력하세요"
          onChange={(e) => setEnglishWord(e.target.value)}
          value={englishWord}
        />
        <input
          type="text"
          placeholder="한글 뜻을 입력하세요"
          onChange={(e) => setKoreanWord(e.target.value)}
          value={koreanWord}
        />
        <input
          type="text"
          placeholder="설명을 입력하세요"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          type="text"
          placeholder="예문을 입력하세요"
          onChange={(e) => setExample(e.target.value)}
          value={example}
        />
        <button type="submit">등록하기</button>
      </form>
      <ul>
        {wordList.map((word, index) => (
          <li key={index}>
            <strong>{word.englishWord}</strong> - {word.koreanWord} ({word.description}) 예: {word.example}
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 33px;
  width: 500px;
  height: calc(100% - 33px);
  color: black;
`;

export default Content;
