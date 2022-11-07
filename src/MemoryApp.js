import Header from "./components/Header";
import styled from "styled-components";
import data from "./card-data";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const SectionWrapper = styled.section`
  margin: 0 auto;
  max-width: 1000px;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

function MemoryApp() {
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);
  const [selected, setSelected] = useState([]);
  const [card, setCards] = useState(data);

  useEffect(() => {
    // THE CLASH ROYALE API IS SURELY RESTRICTED
    // IN MY COUNTRY WILL COME AND FIXE THIS LATER
    // fetch("https://api.clashroyale.com/v1/cards", {
    //   mode: "no-cors",
    // });

    randomOrder();
  }, []);

  const cards = card
    .filter((c) => {
      if (
        c.name !== "Monk" &&
        c.name !== "Phoenix" &&
        c.name !== "Skeleton King" &&
        c.name !== "Golden Knight" &&
        c.name !== "Archer Queen" &&
        c.name !== "Mighty Miner" &&
        c.name !== "Ram Rider" &&
        c.name !== "Night Witch" &&
        c.name !== "Royal Giant" &&
        c.name !== "Mini P.E.K.K.A" &&
        c.name !== "Valkyrie" &&
        c.name !== "Witch"
      ) {
        return c;
      }
    })
    .map((c) => {
      return (
        <Card
          onClick={() => handleClick(c.id)}
          key={c.id}
          name={c.name}
          url={c.iconUrls.medium}
        />
      );
    });

  function handleClick(id) {
    checkSelected(id);
    randomOrder();
  }

  function checkSelected(id) {
    if (!selected.includes(id)) {
      setSelected((prev) => {
        return [...prev, id];
      });

      current >= best && setBest((prev) => prev + 1);
      setCurrent((prev) => prev + 1);
      reset();
    } else {
      setCurrent(0);
      setSelected([]);
    }
  }

  function reset() {
    if (selected.length === card.length) {
      setCurrent(0);
      setSelected([]);
      setBest(0);
    }
  }

  function randomOrder() {
    setCards((prevCards) => {
      for (let i = card.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [prevCards[i], prevCards[j]] = [prevCards[j], prevCards[i]];
      }
      return [...prevCards];
    });
  }

  return (
    <>
      <Header current={current} best={best} />
      <main>
        <SectionWrapper>{cards}</SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

export default MemoryApp;
