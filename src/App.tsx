import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";

const App = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <>
            <Heading title={"Hello!"}></Heading>
            <Section>This is section for children!</Section>
            <Counter setCount={setCount}>Count is {count}</Counter>
            <List items={["Coffee", "Taco", "Pizza"]} render={
                (item: string) => <span className="gold bold">{item}</span>
            }></List>
        </>
    )
}

export default App;