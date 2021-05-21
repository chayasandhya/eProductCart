import React, { useState, useEffect } from "react";
import "../Styles/AdvancedSearch.css";

function AdvancedSearch({ addSearchKeys, search }) {
  //const [checkedGauges, setCheckedGauges] = useState(false);
  // const [checkedMeter, setCheckedMeter] = useState(false);
  // const [checkedPro, setCheckedPro] = useState(false);
  const [checkList, setCheckList] = useState(new Set());
  const [defaultCheck, setDefaultCheck] = useState(false);

  useEffect(() => {
    if (typeof search == "string") {
      setDefaultCheck(false);
    }
  }, [search]);

  useEffect(() => {
    if (Array.from(checkList).length == 0) {
      addSearchKeys([]);
    }
  }, [checkList]);

  function handleGauges(checked) {
    const list = new Set(checkList);
    if (checked) {
      list.add("gauges");
    } else {
      list.delete("gauges");
    }
    setCheckList(list);
    addSearchKeys(Array.from(list));
    /* 
    const check = !checkedGauges;
    setCheckedGauges(check);
    if (check) {
      setSearch("Gauges");
    } else {
      setSearch("");
    } */
  }

  function handleMeters(checked) {
    const list = new Set(checkList);
    if (checked) {
      list.add("meters");
    } else {
      list.delete("meters");
    }
    setCheckList(list);
    addSearchKeys(Array.from(list));
    /* 
    const check = !checkedMeter;
    setCheckedMeter(check);
    if (check) {
      setSearch("Meters");
    } else {
      setSearch("");
    } */
  }

  function handlePro(checked) {
    const list = new Set(checkList);
    if (checked) {
      list.add("protractor");
    } else {
      list.delete("protractor");
    }
    setCheckList(list);
    addSearchKeys(Array.from(list));

    /*     const check = !checkedPro;
    setCheckedPro(check);
    if (check) {
      setSearch("Protractor");
    } else {
      setSearch("");
    } */
  }
  return (
    <div className="adv_container">
      <div className="filter">
        <input
          type="checkbox"
          defaultChecked={defaultCheck}
          onChange={(e) => handleGauges(e.target.checked)}
        />
        <label>Gauges</label>
      </div>
      <div className="filter">
        <input
          type="checkbox"
          // defaultChecked={checkedMeter}
          defaultChecked={defaultCheck}
          onChange={(e) => handleMeters(e.target.checked)}
        />
        <label>Meters</label>
      </div>
      <div className="filter">
        <input
          type="checkbox"
          //defaultChecked={checkedPro}
          onChange={(e) => handlePro(e.target.checked)}
        />
        <label>Protractor</label>
      </div>
    </div>
  );
}

export default AdvancedSearch;
