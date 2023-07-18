import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPools } from "../../redux/reducer/pools.reducer";

import "./Wallet.scss";
import ParticipateCard from "../common/ParticipateCard.js";
const PrizePools = () => {
  const dispatch = useDispatch();
  const poolData = useSelector((state) => state.pool.data);
  const dt = poolData.filter((el) => el.status === 0);

  useEffect(() => {
    dispatch(fetchPools());
  }, [dispatch])

  return (
    <div className="wallet main-container  ">
      <div className="d-flex justify-content-between mb-3">
        <div>
          <h3>List of Pools</h3>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around list-pool">
        {dt && dt.map((el, idx) => <ParticipateCard key={el._id} {...el} />)}
      </div>
    </div>
  );
};

export default PrizePools;
