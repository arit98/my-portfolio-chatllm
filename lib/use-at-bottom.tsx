import { useEffect, useState } from "react";

export function useAtBottom(offset = 0) {
    const [isAtBottom, setIsBottom] = useState(false);
    useEffect(()=>{
        const handleScroll = () => {
            setIsBottom(
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - offset,
            );
        };

        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    },[offset])

    return isAtBottom;
}