import React, { useState } from "react";
import "./styles.css";
import { Calendar, CalendarProvider, DatePicker, TimePicker } from "zaman";

export default function Datapicker() {
  const [view, setView] = useState<string>("cal");

  return (
    <section className="wrapper">
      <div className="tab">
        <div
          className={`tabItem tabItem${view === "cal" ? "--selected" : ""}`}
          onClick={() => setView("cal")}
        >
          Calendar
        </div>
        <div
          className={`tabItem tabItem${view === "day" ? "--selected" : ""}`}
          onClick={() => setView("day")}
        >
          Date picker
        </div>
        <div
          className={`tabItem tabItem${view === "time" ? "--selected" : ""}`}
          onClick={() => setView("time")}
        >
          Time picker
        </div>
      </div>
      {view === "cal" ? (
        <div className="libWrapper">
          <CalendarProvider locale="fa" round="x2">
            <Calendar
              defaultValue={new Date()}
              onChange={(d) => console.log(d)}
              weekends={[6]}
            />
          </CalendarProvider>
          <CalendarProvider locale="fa" round="x4" accentColor="#6374ae">
            <Calendar
              defaultValue={new Date()}
              onChange={(d) => console.log(d)}
              weekends={[6]}
              from={new Date()}
              to={new Date().setDate(new Date().getDate() + 7)}
              range
            />
          </CalendarProvider>
        </div>
      ) : null}
      {view === "day" ? (
        <div className="libWrapper">
          <DatePicker
            round="x4"
            onChange={(d) => console.log(d)}
            inputAttributes={{
              placeholder: "start date"
            }}
          />
          <DatePicker
            round="x2"
            accentColor="#6374ae"
            inputAttributes={{
              placeholder: "start date -- end date"
            }}
            range
          />
        </div>
      ) : null}
      {view === "time" ? (
        <div className="libWrapper">
          <TimePicker
            accentColor="#6374ae"
            onChange={(py) => console.log(py)}
          />
        </div>
      ) : null}
    </section>
  );
}