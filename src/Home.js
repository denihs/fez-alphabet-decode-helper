import React, { Fragment, useState } from "react";
import { AlphabetType } from "./homeHelper";
import BackSpace from "./backspace-24px.svg";
import Space from "./keyboard-space.png";
import DeleteAll from "./delete_sweep-24px.svg";

const Infos = ({ handleClick, values, grid, lastTyped }) => (
        values.map(({ img, alt, representation }, idx) => (
            <Fragment key={alt}>
                <img
                    onClick={() => handleClick(representation)}
                    src={img}
                    alt={alt}
                    className={
                        `icon ${lastTyped === representation ? "last-typed" : ""}`
                    }
                />
                {(idx + 1) % grid === 0 ? <div /> : null}
            </Fragment>
        ))
    )
;

export const Home = () => {
    const numbersType = AlphabetType.getNumbersType();
    const lettersType = AlphabetType.getLettersType();
    const [word, setWord] = useState("");
    const [lastTyped, setLastTyped] = useState("");

    const handleClick = (alpha) => {
        setWord(`${word} ${alpha}`);
        setLastTyped(alpha);
    };

    const spaceCharacter = "_";

    return (
        <div className="home">
            <div className="container">
                <div>
                    <p>Numbers</p>
                    <Infos
                        handleClick={handleClick}
                        lastTyped={lastTyped}
                        values={numbersType}
                        grid={4}
                    />
                </div>
                <div>
                    <p>Letters</p>
                    <Infos handleClick={handleClick}
                           lastTyped={lastTyped}
                           values={lettersType}
                           grid={5}
                    />
                </div>
            </div>

            <img
                className={lastTyped === spaceCharacter ? "last-typed" : ""}
                onClick={() => handleClick(spaceCharacter)}
                src={Space}
                alt="space-keyboard"
            />

            <div className="answer-content">
                <div className="answer-content-word">
                    {word}
                </div>
                <div className="delete-buttons">
                    <img
                        className="icon"
                        src={BackSpace}
                        alt="back-space"
                        onClick={() => {
                            setWord(word.slice(0, word.length - 2));
                        }}
                    />
                    <img
                        className="icon"
                        src={DeleteAll}
                        alt="DeleteAll"
                        onClick={() => {
                            setWord("");
                        }}
                    />
                </div>
            </div>
        </div>
    )
};