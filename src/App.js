import {v4 as uuidv4} from 'uuid'
import {useState} from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import Header from "./components/Header";
import FeedbackData from './data/Feedbackdata'


function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) =>{
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    const addFeedbaack = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return(
        <>
        <Header/>
        <div className="container">
            <FeedbackForm handleAdd={addFeedbaack}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App;