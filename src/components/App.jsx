import { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App =() => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (e) => {
    const buttonValue = e.target.name;
    switch (buttonValue) {
      case 'good':
        setGood((prevState) => prevState+1)
        break;
      case 'neutral':
        setNeutral((prevState) => prevState+1)
        break;
      case 'bad':
        setBad((prevState) => prevState+1)
        break;
      default:
        break;
    }
    toast('Thank You!');
  }
  
  const countTotalFeedback = () => {
    return (good+neutral+bad)
  }

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback=countTotalFeedback()
    return ((good/(totalFeedback)*100)).toFixed()
  }

    return (
      <>
        <Section title='Please leave feedback'>
        <FeedbackOptions
          options={Object.keys({good, neutral, bad})}
          onLeaveFeedback = {handleClick}>
          </FeedbackOptions>
        </Section>
        <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />) :
            <Notification message="There is no feedback" />}
        </Section>
        <Toaster
          toastOptions={{
            duration: 2500,
            icon: '💙',
            style: {
              background: '#3deb34',
              color: 'black',
            }
          }} />
      </>
    );
  }


// import React, { Component } from "react";

// export class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   handleClickGood = () => {
//     this.setState((prevState) => ({ good: prevState.good += 1 }))
//   }
  
//   handleClickNeutral = () => {
//     this.setState((prevState) => ({ neutral: prevState.neutral += 1 }))
//   }

//   handleClickBad = () => {
//     this.setState((prevState) => ({ bad: prevState.bad += 1 }))
//   }

//   countTotalFeedback = () => {
//     return (this.state.good+this.state.neutral+this.state.bad)
//   }

//   countPositiveFeedbackPercentage = () => {
//     const totalFeedback=this.countTotalFeedback()
//     return ((this.state.good/(totalFeedback)*100)).toFixed()
//   }

//   render() {
//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         <button type="button" onClick={this.handleClickGood}>Good</button>
//         <button type="button" onClick={this.handleClickNeutral}>Neutral</button>
//         <button type="button" onClick={this.handleClickBad}>Bad</button>
//         <h2>Statistics</h2>
//         {this.countTotalFeedback() > 0 ? (
//           <><p>Good:<span>{this.state.good}</span></p>
//           <p>Neutral:<span>{this.state.neutral}</span></p>
//           <p>Bad:<span>{this.state.bad}</span></p>
//           <p>Total:<span>{this.countTotalFeedback()}</span></p>
//           <p>Positive feedback:<span>{this.countPositiveFeedbackPercentage()}%</span></p>
//           </>) :
//           <h3>There is no feedback</h3>}
//       </div>
//     );
//   }
// };
