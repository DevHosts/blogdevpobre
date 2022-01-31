import { useState, useEffect } from "react";
import styles from "../styles/card.module.css";
import api from "../pages/service/api";

export default function Card() {
  const [user, setUser] = useState([{ email: "", name: "", description: "" }]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/data");
      const respo = res.data;

      // this will re render the view with new data
      setUser(respo);
    };

    fetchData();
  }, []);

  console.log(user);

  function Comment(props) {}

  return (
    <div className={styles.card}>
      {user.map((res, i) => {
        return (
          <>
            <div key={i} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="..." className="" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{res.name}</h5>
                    <p className="card-text">{res.description}</p>
                    <p className="card-text">
                      <small className="text-muted">{res.email}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            ;
          </>
        );
      })}
    </div>
  );
}
