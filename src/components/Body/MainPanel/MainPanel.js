import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateSelectedDate } from '../../../actions/index';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './MainPanel.css';

BigCalendar.momentLocalizer(moment);

class MainPanel extends Component {
    render(){
        return(
            <div>
                <BigCalendar
                    date = { this.props.selectedDate } // issues a warning about read only shit, gotta fix that 
                    onNavigate={(date) =>{ this.props.updateSelectedDate(date)}} // this will work once redux is set up
                    views={{
                        week: true,
                        day: true,
                        agenda: true
                    }}
                    selectable
                    events={this.props.events}
                    defaultView="week"
                    scrollToTime={new Date(2008, 1, 1, 6)} // set state to date from minCalendar
                    defaultDate={new Date(2018, 3, 12)}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={slotInfo =>
                        alert(
                        `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                            `\nend: ${slotInfo.end.toLocaleString()}` +
                            `\naction: ${slotInfo.action}`
                        )
                    }
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateSelectedDate }, dispatch);
  }
  
  export default connect(null, mapDispatchToProps)(MainPanel);