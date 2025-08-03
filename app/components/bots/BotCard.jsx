"use client";

import React, { useEffect, useState } from "react";
import SubTitle from "../title/SubTitle";
import BotItem from "./BotItem";

function BotCard() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_BASE_URL  + "/api/bots/get";
        const res = await fetch(url);
        const data = await res.json();
        console.log("this is the data: ", data);
        setBots(data);
      } catch (err) {
        console.error("Failed to fetch bots:", err);
      }
    };

    fetchBots();
  }, []);

  return (
    <div>
      <SubTitle title="Bots" />
      {bots.length === 0 ? (
        <p className="text-[#8a8060] text-sm font-normal leading-normal px-4 py-2">
          Please add bot before adding orders
        </p>
      ) : (
        bots.map((bot) => <BotItem key={bot.botID} bot={bot} />)
      )}
    </div>
  );
}

export default BotCard;
