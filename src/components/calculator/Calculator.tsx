import { useState } from "react";
import "./calculator.scss";

export const Calculator = () => {
    const [expression, setExpression] = useState<string[]>([]);
    const [result, setResult] = useState("");
    const [current, setCurrent] = useState("");
    const [isEvaluated, setIsEvaluated] = useState(false);

    const handleButtonClick = (e) => {
        const target = e.target;
        if (!target.classList.contains("calculator-container__buttons--button"))
            return;
        const value = target.textContent;

        const isOperator = ["+", "-", "x", "/", "%"].includes(value);

        if (value === "C") {
            setExpression([]);
            setCurrent("");
            setResult("");
            return;
        }

        if (value === "=") {
            const fullExpression = [...expression, current].join(" ");
            try {
                const sanitized = fullExpression
                    .replace(/x/g, "*")
                    .replace(/%/g, "/100");
                const evalResult = eval(sanitized);
                const limitedResult =
                    typeof evalResult === "number"
                        ? parseFloat(evalResult.toPrecision(12)).toString()
                        : evalResult.toString();

                setResult(limitedResult);
            } catch (err) {
                setResult("Error");
                console.error("Error evaluating expression:", err);
            }
            return;
        }

        if (value === "+/-") {
            if (current.startsWith("-")) {
                setCurrent(current.slice(1));
            } else {
                setCurrent("-" + current);
            }
            return;
        }

        if (value === "%") {
            if (current !== "") {
                const percentValue = (parseFloat(current) / 100).toString();
                setCurrent(percentValue);
            }
            return;
        }

        if (isOperator) {
            if (current === "") return;

            const operator = value === "x" ? "x" : value;
            setExpression((prev) => [...prev, current, operator]);
            setCurrent("");
            return;
        }

        if (
            e.target.classList.contains("calculator-container__buttons--button")
        ) {
            if (isEvaluated) {
                setCurrent(value);
                setIsEvaluated(false);
            } else {
                setCurrent((prev) => prev + value);
            }
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator-container__display">
                <div className="calculator-container__display--expression">
                    {[...expression, current].join(" ")}
                </div>
                <div className="calculator-container__display--result">
                    {result}
                </div>
            </div>
            <div
                className="calculator-container__buttons"
                onClick={(e) => handleButtonClick(e)}
            >
                <div className="calculator-container__buttons--row">
                    <button className="calculator-container__buttons--button operation">
                        C
                    </button>
                    <button className="calculator-container__buttons--button operation">
                        +/-
                    </button>
                    <button className="calculator-container__buttons--button operation">
                        %
                    </button>
                    <button className="calculator-container__buttons--button operator">
                        /
                    </button>
                </div>
                <div className="calculator-container__buttons--row">
                    <button className="calculator-container__buttons--button">
                        7
                    </button>
                    <button className="calculator-container__buttons--button">
                        8
                    </button>
                    <button className="calculator-container__buttons--button">
                        9
                    </button>
                    <button className="calculator-container__buttons--button operator">
                        x
                    </button>
                </div>
                <div className="calculator-container__buttons--row">
                    <button className="calculator-container__buttons--button">
                        4
                    </button>
                    <button className="calculator-container__buttons--button">
                        5
                    </button>
                    <button className="calculator-container__buttons--button">
                        6
                    </button>
                    <button className="calculator-container__buttons--button operator">
                        -
                    </button>
                </div>
                <div className="calculator-container__buttons--row">
                    <button className="calculator-container__buttons--button">
                        1
                    </button>
                    <button className="calculator-container__buttons--button">
                        2
                    </button>
                    <button className="calculator-container__buttons--button">
                        3
                    </button>
                    <button className="calculator-container__buttons--button operator">
                        +
                    </button>
                </div>
                <div className="calculator-container__buttons--row">
                    <button className="calculator-container__buttons--button zero">
                        0
                    </button>
                    <button className="calculator-container__buttons--button operation">
                        .
                    </button>
                    <button className="calculator-container__buttons--button equal">
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};
