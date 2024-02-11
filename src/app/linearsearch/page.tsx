"use client"
import { useState, useEffect, useRef } from "react";
import ArrayElement from "../arrayElement";

import styles from "../Array.module.css"

export default function LinearSearch() {
    const [size, setSize] = useState(11);
    const [arr, setArr] = useState<Array<{ id: number; value: number }>>([]);
    const [currIndex, setCurrIndex] = useState<number>(-1);

    const inputRef = useRef(null);

    useEffect(() => {
        function generateRandomArray() {
            const newArray = Array.from({ length: size }, (_, index) => ({
                id: index + 1,
                value: Math.floor(Math.random() * 99) + 1
            }));
            setArr(newArray);
        }

        generateRandomArray();
    }, [size]);

    function searchClickHandler() {
        if (inputRef != null && inputRef.current.value.length == 0) return;

        const targetValue = Number(inputRef.current.value);

        setCurrIndex(-1);
        let found = false;
        for (let i = 0; i <= size; i++) {
            setTimeout(() => {
                if (found == true) return;
                setCurrIndex((prevIndex) => prevIndex + 1);
                if (i != size && targetValue == arr[i].value) {
                    found = true;
                }
            }, i * 750);
            // if()
        }
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.indices}>
                    {
                        arr.map((elem, index) => {
                            return <div key={elem.id} className={styles.index}>{index}</div>
                        })
                    }
                </div>
                <div className={styles.array}>
                    {
                        arr.map((elem, index) => {
                            return <ArrayElement key={elem.id} value={elem.value} isCurrent={currIndex === index} />
                        })
                    }
                </div>
            </main>

            <footer className={`${styles.footer} bg-black bg-opacity-50 text-white p-4 rounded-t-lg shadow-lg`}>
                <div className="text-white">
                    index = {currIndex === -1 || currIndex >= size ? "-1" : currIndex}
                </div>

                <div className="flex items-center">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Enter target"
                        className="bg-white text-black p-2 rounded-md mr-2 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                    />

                    <button
                        onClick={() => searchClickHandler()}
                        className="bg-white text-black p-4 rounded-md hover:bg-gray-800 hover:text-white transition duration-300"
                    >
                        Search
                    </button>
                </div>
            </footer>

        </>
    );
}
