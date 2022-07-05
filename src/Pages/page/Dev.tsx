// importing react hooks
import { useState, useEffect } from "react";

// firebase
import { db } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

type Props = {};

const Dev = (props: Props) => {
  // firestore
  const reviewRef = collection(db, "reviews");

  // state
  const [reviews, setReviews] = useState<any>(); // data fetched from database
  const [overAllReaction, setOverAllReaction] = useState<number[]>([0, 0, 0]); // [ 😎, ❤️, 👌]
  // form states
  const [username, setUsername] = useState<String>(""); // username
  const [message, writeMessage] = useState<String>(""); // message
  const [rating, setRating] = useState<number>(-1); // rating

  // useEffect
  useEffect(() => {}, []);

  // function to retrieve reactions from firestore
  const getReactionFromDB = async () => {
    const data = await getDocs(reviewRef);
    setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // function to add review from firestore
  const addReviewToDB = async ({
    username,
    message,
    review,
  }: {
    username: string;
    message: string;
    review: string;
  }) => {
    await addDoc(reviewRef, { username, review, message });
  };

  return (
    <>
      <div>Dev Page</div>
    </>
  );
};

export default Dev;
