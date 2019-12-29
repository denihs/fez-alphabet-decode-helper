import zero from "./images/0.jpg";
import one from "./images/1.jpg";
import two from "./images/2.jpg";
import threeA from "./images/3a.jpg";
import threeB from "./images/3b.jpg";
import fourA from "./images/4a.jpg";
import fourB from "./images/4b.jpg";
import fiveA from "./images/5a.jpg";
import fiveB from "./images/5b.jpg";
import sixA from "./images/6a.jpg";
import sixB from "./images/6b.jpg";
import sevenA from "./images/7a.jpg";
import sevenB from "./images/7b.jpg";
import eight from "./images/8.jpg";
import nine from "./images/9.jpg";
import ten from "./images/10.jpg";
import A from "./images/A.jpg";
import B from "./images/B.jpg";
import C from "./images/C.jpg";
import D from "./images/D.jpg";
import E from "./images/E.jpg";
import F from "./images/F.jpg";
import G from "./images/G.jpg";
import H from "./images/H.jpg";
import I from "./images/I.jpg";
import J from "./images/J.jpg";
import K from "./images/K.jpg";
import L from "./images/L.jpg";
import M from "./images/M.jpg";
import N from "./images/N.jpg";
import O from "./images/O.jpg";
import P from "./images/P.jpg";
import Q from "./images/Q.jpg";
import R from "./images/R.jpg";
import S from "./images/S.jpg";
import T from "./images/T.jpg";
import U from "./images/U.jpg";
import V from "./images/V.jpg";
import W from "./images/W.jpg";
import X from "./images/X.jpg";
import Y from "./images/Y.jpg";
import Z from "./images/Z.jpg";

export const NUMBER_TYPE = "NUMBER";
export const LETTER_TYPE = "LETTER";

const images = {
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
};

const alphabet = {
    ZERO: {
        alt: "zero",
        img: zero,
        representation: 0,
        type: NUMBER_TYPE,
    },
    ONE: {
        alt: "one",
        img: one,
        representation: 1,
        type: NUMBER_TYPE,
    },
    TWO: {
        alt: "two",
        img: two,
        representation: 2,
        type: NUMBER_TYPE,
    },
    THREE_A: {
        alt: "threeA",
        img: threeA,
        representation: 3,
        type: NUMBER_TYPE,
    },
    THREE_B: {
        alt: "threeB",
        img: threeB,
        representation: 3,
        type: NUMBER_TYPE,
    },
    FOUR_A: {
        alt: "fourA",
        img: fourA,
        representation: 4,
        type: NUMBER_TYPE,
    },
    FOUR_B: {
        alt: "fourB",
        img: fourB,
        representation: 4,
        type: NUMBER_TYPE,
    },
    FIVE_A: {
        alt: "fiveA",
        img: fiveA,
        representation: 5,
        type: NUMBER_TYPE,
    },
    FIVE_B: {
        alt: "fiveB",
        img: fiveB,
        representation: 5,
        type: NUMBER_TYPE,
    },
    SIX_A: {
        alt: "sixA",
        img: sixA,
        representation: 6,
        type: NUMBER_TYPE,
    },
    SIX_B: {
        alt: "sixB",
        img: sixB,
        representation: 6,
        type: NUMBER_TYPE,
    },
    SEVEN_A: {
        alt: "sevenA",
        img: sevenA,
        representation: 7,
        type: NUMBER_TYPE,
    },
    SEVEN_B: {
        alt: "sevenB",
        img: sevenB,
        representation: 7,
        type: NUMBER_TYPE,
    },
    EIGHT: {
        alt: "eight",
        img: eight,
        representation: 8,
        type: NUMBER_TYPE,
    },
    NINE: {
        alt: "nine",
        img: nine,
        representation: 9,
        type: NUMBER_TYPE,
    },
    TEN: {
        alt: "ten",
        img: ten,
        representation: 10,
        type: NUMBER_TYPE,
    },
    ...(() => {
        const alpha = Object.keys(images);
        return alpha.reduce((acc, letter) => (
            {
                ...acc,
                [letter]: {
                    alt: letter,
                    img: images[letter],
                    representation: letter,
                    type: LETTER_TYPE,
                }
            }
        ), {});
    })()
};

alphabet.getNumbersType = () => Object.values(alphabet).filter(a => a.type === NUMBER_TYPE);
alphabet.getLettersType = () => Object.values(alphabet).filter(a => a.type === LETTER_TYPE);

export const AlphabetType = alphabet;