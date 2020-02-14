import React, { useState, useEffect } from "react";
import api from "src/services/api";

import {
  ContainerNew,
  ImageSeach,
  ContainerNews,
  NewsTitle,
  ContainerNewsTitle,
  ContainerNewsDescribe,
  ContainerPagination,
  NumberPagination,
  CotentNews,
  Linkto,
  ContentNews,
  IconLefth,
  IconRight,
  ContainerIcon
} from "./styles";

import { IdentifySession } from "../styles";
import NewsSvg from "src/assets/svgs/News.svg";

export default function News() {
  const [pages, setPages] = useState([]);
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/noticias");

      let paginas = [];
      for (let k = 0; k < response.data.length; k += 2) {
        let children = [];
        if (response.data[k + 1] != null) {
          children.push(response.data[k]);
          children.push(response.data[k + 1]);
        } else children.push(response.data[k]);

        paginas.push(children);
      }
      setNews(paginas[0]);
      setPages(paginas);
    }

    loadData();
  }, []);

  const handlePaginate = () => {
    let numbers = [];
    for (let k = 0; k < pages.length; k++) {
      numbers.push(
        <NumberPagination
          key={k}
          ativo={k === index}
          onClick={() => setIndex(k)}
        >
          {k + 1}
        </NumberPagination>
      );
    }
    return numbers;
  };

  useEffect(() => {
    if (pages.length > 0) setNews(pages[index]);
  }, [pages, index]);

  const handlePrev = () =>
    setIndex(state => (state - 1 < 0 ? state : state - 1));

  const handleBack = () =>
    setIndex(state => (state + 1 > pages.length - 1 ? state : state + 1));

  return (
    <ContainerNew>
      <ImageSeach src={NewsSvg} />
      <ContainerNews>
        <IdentifySession>Noticias</IdentifySession>
        <NewsTitle>Nossas noticias</NewsTitle>
        <ContentNews>
          {news.map(news => (
            <Linkto to="/news" key={news.id}>
              <CotentNews>
                <ContainerNewsTitle>{news.titulo}</ContainerNewsTitle>
                <ContainerNewsDescribe>{news.descricao}</ContainerNewsDescribe>
              </CotentNews>
            </Linkto>
          ))}
        </ContentNews>
        <ContainerPagination>
          <ContainerIcon>
            <IconLefth onClick={handlePrev} />
          </ContainerIcon>
          {handlePaginate()}
          <ContainerIcon>
            <IconRight onClick={handleBack} />
          </ContainerIcon>
        </ContainerPagination>
      </ContainerNews>
    </ContainerNew>
  );
}
