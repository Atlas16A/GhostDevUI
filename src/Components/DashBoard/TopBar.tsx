import React, { useEffect, useState } from "react";
import "./TopBar.css";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

function TopBar() {
  const { user } = useMoralis();

  const web3Api = useMoralisWeb3Api();

  const ethAddress = () => {
    if (user === null) {
      return null;
    } else {
      return user.get("ethAddress");
    }
  };

  const [CurrentUser, UpdateCurrentUser] = useState(ethAddress());

  const fetchAddress = async () => {
    // get ENS domain of an address
    //@ts-expect-error
    const address = user.get("ethAddress");
    const options = { address: address };
    const resolve = JSON.stringify(
      //@ts-expect-error
      (await web3Api.resolve.resolveAddress(options)).name
    );
    return resolve;
  };

  useEffect(() => {
    fetchAddress().then((resolve) => {
      UpdateCurrentUser(resolve);
    });
  }, []);

  return <p>GHOST {CurrentUser}</p>;
}

export default TopBar;
