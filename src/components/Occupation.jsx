import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../scss/roles.scss";

const Occupation = () => {
  const [details, setDetails] = useState([
    {
      occupation: "",
      from_year: "",
      from_month: "",
      from_day: "",
      to_year: "",
      to_month: "",
      to_day: "",
    },
  ]);
  console.warn = () => {};

  const [counter, setCounter] = useState(1);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...details];
    list[index][name] = value;
    setDetails(list);
  };

  const increaseCounter = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    setDetails([
      ...details,
      {
        occupation: "",
        from_year: "",
        from_month: "",
        from_day: "",
        to_year: "",
        to_month: "",
        to_day: "",
      },
    ]);
  };

  const decreaseCounter = (e, index) => {
    e.preventDefault();
    console.log(index);
    const list = [...details];
    list.splice(index, 1);
    setDetails(list);
  };

  const leapYear = (year) => {
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="occupation">
      <div className="roles">
        <h1>Roles</h1>
        {details.map((c, index) => {
          return (
            <React.Fragment key={index}>
              <Box sx={{ width: 200 }}>
                <FormControl fullWidth>
                  <InputLabel id="occupationLabel">Occupation</InputLabel>
                  <Select
                    labelId="occupation"
                    id="occupation"
                    value={c.occupation}
                    label="Occupation"
                    name="occupation"
                    onChange={(e) => handleChange(e, index)}
                  >
                    <MenuItem value={"Software Developer"}>
                      Software Developer
                    </MenuItem>
                    <MenuItem value={"IT Department"}>IT Department</MenuItem>
                    <MenuItem value={"Dev Oops"}>Dev Oops</MenuItem>
                    <MenuItem value={"QA"}>QA</MenuItem>
                    <MenuItem value={"Project Manager"}>
                      Project Manager
                    </MenuItem>
                    <MenuItem value={"Business Analyst"}>
                      Business Analyst
                    </MenuItem>
                    <MenuItem value={"UX Designer"}>UX Designer</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <div className="date">
                <Box sx={{ width: 160 }}>
                  <FormControl fullWidth>
                    <InputLabel id="yearLabel">from year</InputLabel>
                    <Select
                      labelId="year"
                      id="year"
                      name="from_year"
                      value={c.from_year}
                      label="From Year"
                      onChange={(e) => handleChange(e, index)}
                    >
                      {[...Array(80)]
                        .map((x, i) => i + 1999)
                        .map((year) => {
                          return (
                            <MenuItem value={year} key={year}>
                              {year}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: 160 }}>
                  <FormControl fullWidth>
                    <InputLabel id="monthLabel">from month</InputLabel>
                    <Select
                      labelId="month"
                      id="month"
                      value={c.from_month}
                      label="from month"
                      name="from_month"
                      onChange={(e) => handleChange(e, index)}
                    >
                      <MenuItem value={"January"}>January</MenuItem>
                      <MenuItem value={"Feburary"}>Feburary</MenuItem>
                      <MenuItem value={"March"}>March</MenuItem>
                      <MenuItem value={"April"}>April</MenuItem>
                      <MenuItem value={"May"}>May</MenuItem>
                      <MenuItem value={"June"}>June</MenuItem>
                      <MenuItem value={"July"}>July</MenuItem>
                      <MenuItem value={"August"}>August</MenuItem>
                      <MenuItem value={"September"}>September</MenuItem>
                      <MenuItem value={"October"}>October</MenuItem>
                      <MenuItem value={"November"}>November</MenuItem>
                      <MenuItem value={"December"}>December</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: 160 }}>
                  <FormControl fullWidth>
                    <InputLabel id="dayLabel">from day</InputLabel>
                    <Select
                      labelId="day"
                      id="day"
                      value={c.from_day}
                      label="From day"
                      name="from_day"
                      onChange={(e) => handleChange(e, index)}
                    >
                      {c.from_month === "January" ||
                      c.from_month === "March" ||
                      c.from_month === "May" ||
                      c.from_month === "July" ||
                      c.from_month === "August" ||
                      c.from_month === "October" ||
                      c.from_month === "December"
                        ? [...Array(31)]
                            .map((x, i) => i + 1)
                            .map((day) => {
                              return (
                                <MenuItem value={day} key={day}>
                                  {day}
                                </MenuItem>
                              );
                            })
                        : c.from_month === "April" ||
                          c.from_month === "June" ||
                          c.from_month === "September" ||
                          c.from_month === "November"
                        ? [...Array(30)]
                            .map((x, i) => i + 1)
                            .map((day) => {
                              return (
                                <MenuItem value={day} key={day}>
                                  {day}
                                </MenuItem>
                              );
                            })
                        : c.from_month === "Feburary" &&
                          leapYear(c.from_year) === true
                        ? [...Array(29)]
                            .map((x, i) => i + 1)
                            .map((day) => {
                              return (
                                <MenuItem value={day} key={day}>
                                  {day}
                                </MenuItem>
                              );
                            })
                        : c.from_month === "Feburary" &&
                          leapYear(c.from_year) === false
                        ? [...Array(28)]
                            .map((x, i) => i + 1)
                            .map((day) => {
                              return (
                                <MenuItem value={day} key={day}>
                                  {day}
                                </MenuItem>
                              );
                            })
                        : null}
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="date">
                <Box sx={{ width: 160 }}>
                  <FormControl fullWidth>
                    <InputLabel id="yearLabel">to year</InputLabel>
                    <Select
                      labelId="year"
                      id="year"
                      name="to_year"
                      value={c.to_year}
                      label="to Year"
                      onChange={(e) => handleChange(e, index)}
                    >
                      {c.from_year !== ""
                        ? [...Array(80)]
                            .map((x, i) => i + c.from_year + 1)
                            .map((year) => {
                              return (
                                <MenuItem value={year} key={year}>
                                  {year}
                                </MenuItem>
                              );
                            })
                        : null}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: 160 }}>
                  <FormControl fullWidth>
                    <InputLabel id="monthLabel">to month</InputLabel>
                    <Select
                      labelId="month"
                      id="month"
                      value={c.to_month}
                      label="to month"
                      name="to_month"
                      onChange={(e) => handleChange(e, index)}
                    >
                      <MenuItem value={"January"}>January</MenuItem>
                      <MenuItem value={"Feburary"}>Feburary</MenuItem>
                      <MenuItem value={"March"}>March</MenuItem>
                      <MenuItem value={"April"}>April</MenuItem>
                      <MenuItem value={"May"}>May</MenuItem>
                      <MenuItem value={"June"}>June</MenuItem>
                      <MenuItem value={"July"}>July</MenuItem>
                      <MenuItem value={"August"}>August</MenuItem>
                      <MenuItem value={"September"}>September</MenuItem>
                      <MenuItem value={"October"}>October</MenuItem>
                      <MenuItem value={"November"}>November</MenuItem>
                      <MenuItem value={"December"}>December</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: 160 }}>
                  <FormControl fullWidth>
                    <InputLabel id="dayLabel">to day</InputLabel>
                    <Select
                      labelId="day"
                      id="day"
                      value={c.to_day}
                      label="to day"
                      name="to_day"
                      onChange={(e) => handleChange(e, index)}
                    >
                      {c.to_month === "January" ||
                      c.to_month === "March" ||
                      c.to_month === "May" ||
                      c.to_month === "July" ||
                      c.to_month === "August" ||
                      c.to_month === "October" ||
                      c.to_month === "December"
                        ? [...Array(31)]
                            .map((x, i) => i + 1)
                            .map((day) => {
                              return (
                                <MenuItem value={day} key={day}>
                                  {day}
                                </MenuItem>
                              );
                            })
                        : c.to_month === "April" ||
                          c.to_month === "June" ||
                          c.to_month === "September" ||
                          c.to_month === "November"
                        ? [...Array(30)]
                            .map((x, i) => i + 1)
                            .map((day) => {
                              return (
                                <MenuItem value={day} key={day}>
                                  {day}
                                </MenuItem>
                              );
                            })
                        : c.to_month === "Feburary" &&
                          leapYear(c.to_year) === true
                        ? [...Array(29)]
                            .map((x, i) => i + 1)
                            .map((day) => {
                              return (
                                <MenuItem value={day} key={day}>
                                  {day}
                                </MenuItem>
                              );
                            })
                        : c.to_month === "Feburary" &&
                          leapYear(c.to_year) === false
                        ? [...Array(28)]
                            .map((x, i) => i + 1)
                            .map((day) => {
                              return (
                                <MenuItem value={day} key={day}>
                                  {day}
                                </MenuItem>
                              );
                            })
                        : null}
                    </Select>
                  </FormControl>
                </Box>
                 {index === 0 ? null : (
                  <button
                    className="remove"
                    onClick={(e) => decreaseCounter(e, index)}
                  >
                    - Remove
                  </button>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      {counter <= 4 ? (
        <button onClick={increaseCounter}>+ Add</button>
      ) : (
        <button onClick={increaseCounter} disabled className="disable">
          + Add
        </button>
      )}
    </div>
  );
};

export default Occupation;
