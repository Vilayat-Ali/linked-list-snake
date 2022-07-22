// importing react hooks
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// firebase
import { db } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

type Props = {};

const About = (props: Props) => {
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
      <Helmet>
        {/* Bootstrap  */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <div className="text-primary">About Page</div>
    </>
  );
};

export default About;
