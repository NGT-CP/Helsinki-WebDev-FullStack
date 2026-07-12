import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine
        text="average"
        value={(props.good - props.bad) / total}
      />
      <StatisticLine
        text="positive"
        value={(props.good / total) * 100 + " %"}
      />
    </div>
  );
};

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>

      <h1>Give Feedback</h1>

      <Button
        text="Good"
        onClick={() => setGood(good + 1)}
      />

      <Button
        text="Neutral"
        onClick={() => setNeutral(neutral + 1)}
      />

      <Button
        text="Bad"
        onClick={() => setBad(bad + 1)}
      />

      <h1>Statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />

    </div>
  );
};

export default App;