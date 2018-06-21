import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {selectDayRange} from "../../AC";
import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    handleDayClick = day => {
        const {selectDayRange} = this.props
        selectDayRange(day)
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    dateRange: state.dateRange
}), {selectDayRange})(DateRange)