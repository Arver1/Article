import React from 'react';
import { connect } from 'react-redux';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { updateRange } from '../../AC';

function Calendar({from, to, updateRange}) {

  const handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, { from, to });
    updateRange(range);
  };

  const handleResetClick = () => {
    updateRange({
      from: null,
      to: null
    })
  };

  return (
    <section className = "calendar">
      <p className = "calendar__description">
        {!from && !to && 'Please select the first day.'}
        {from && !to && 'Please select the last day.'}
        {from &&
        to &&
        `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
        {from &&
        to && (
          <button className="link btn btn--color" onClick={ handleResetClick }>
            Reset
          </button>
        )}
      </p>
    <DayPicker
      className = "Selectable main-page__calendar"
      numberOfMonths = {2}
      selectedDays={[from, { from, to }]}
      onDayClick={ handleDayClick }
    />
    </section>
  )
}

export default connect(({filters}) => {
  return {
    from: filters.from,
    to: filters.to
  }
}, { updateRange })(Calendar);
