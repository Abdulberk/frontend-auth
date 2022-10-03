import React, { useCallback } from "react";
import styled, { StyledInterface, StyledComponent } from "styled-components";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useMemo } from "react";

const FeedsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #f7ecde;
  border-radius: 10px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
`;
const FeedsTitle = styled.h1`
  font-size: 1.5rem;
`;

const FeedsImage = styled.img``;
const FeedsImageContainer = styled.div``;
const FeedsText = styled.p``;

const FeedsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
  margin: 0 auto;
  margin-bottom: 15px;
  background-color: #f0f8ff;
  border-radius: 10px;

  border-bottom-style: solid;
  border-width: thick;
`;

function MyFeeds() {
  const [feeds, setFeeds] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://6320c9689f82827dcf34503d.mockapi.io/feeds")
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setFeeds(response.data);
          setIsLoading(false);
        } else {
          setError(true);
          setIsLoading(false);
        }
      })
      .catch((error: any) => {
        setError(true);
        console.log(error.message);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
        console.log("usecallback çalıştı");
      });
  }, []);

  return (
    <div>
      {error && <h1>error ocurred !</h1>}
      {isLoading ? (
        <h1>fetching feeds...</h1>
      ) : (
        <section>
          <FeedsMainContainer>
            {feeds.map((feed: any) => {
              return (
                <div key={feed.id}>
                  <FeedsContainer>{feed.news}</FeedsContainer>
                </div>
              );
            })}
          </FeedsMainContainer>
        </section>
      )}
    </div>
  );
}

export default MyFeeds;
