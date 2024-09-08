import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ko'; // 한국어 로케일을 import
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// 아이콘
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

moment.locale('ko');
const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

const Diary = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    category: '',
  });

  const handleSelect = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setNewEvent({
      ...newEvent,
      start: slotInfo.start,
      end: slotInfo.end,
    });
    setShowModal(true);
  };

  const handleAddEvent = () => {
    const color =
      newEvent.category === '운동'
        ? 'green'
        : newEvent.category === '약'
        ? 'purple'
        : newEvent.category === '병원'
        ? 'blue'
        : 'gray';

    setEvents([...events, { ...newEvent, color }]);
    setShowModal(false);
    setNewEvent({ title: '', start: '', end: '', category: '' });
    setSelectedDate(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddEvent();
    }
  };

  const moveEvent = ({ event, start, end }) => {
    const updatedEvents = events.map((e) =>
      e.title === event.title ? { ...e, start, end } : e
    );
    setEvents(updatedEvents);
  };

  const resizeEvent = ({ event, start, end }) => {
    const updatedEvents = events.map((e) =>
      e.title === event.title ? { ...e, start, end } : e
    );
    setEvents(updatedEvents);
  };

  const deleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter((e) => e !== eventToDelete);
    setEvents(updatedEvents);
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = event.color;
    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
    };
    return { style };
  };

  const CustomToolbar = (toolbar) => {
    const { date, view, onNavigate, onView } = toolbar;

    return (
      <div className='rbc-toolbar'>
        <span className='rbc-btn-group'>
          <Button variant='link' onClick={() => onNavigate('PREV')}>
            <FaChevronLeft />
          </Button>
          <Button variant='link' onClick={() => onNavigate('NEXT')}>
            <FaChevronRight />
          </Button>
        </span>
        <span className='rbc-toolbar-label'>
          {moment(date).format('YYYY년 MM월')}
        </span>
        <span className='rbc-btn-group'>
          <Button variant='link' onClick={() => onView('month')}>
            월
          </Button>
          <Button variant='link' onClick={() => onView('week')}>
            주
          </Button>
          <Button variant='link' onClick={() => onView('day')}>
            일
          </Button>
        </span>
      </div>
    );
  };

  return (
    <>
      <div className='w-[80%] items-center mx-auto'>
        <div className='text-center my-4'>
          <div className='flex justify-end space-x-8'>
            <div className='flex items-center space-x-2'>
              <div className='bg-green-500 shadow-md shadow-green-500/50 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold'></div>
              <span className='text-sm font-medium'>운동</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='bg-purple-500 shadow-md shadow-purple-500/50 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold'></div>
              <span className='text-sm font-medium'>약</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='bg-blue-500 shadow-md shadow-blue-500/50 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold'></div>
              <span className='text-sm font-medium'>병원</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='bg-gray-500 shadow-md shadow-gray-500/50 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold'></div>
              <span className='text-sm font-medium'>일상</span>
            </div>
          </div>
        </div>

        <div style={{ height: 500 }}>
          <DragAndDropCalendar
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 500 }}
            selectable
            onSelectSlot={handleSelect}
            onEventDrop={moveEvent}
            onEventResize={resizeEvent}
            resizable
            eventPropGetter={eventStyleGetter}
            formats={{
              weekdayFormat: 'ddd',
              dayFormat: 'MM월 DD일',
              monthHeaderFormat: 'YYYY년 MM월',
            }}
            components={{
              event: ({ event }) => (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{event.title}</span>
                  <Button
                    variant='danger'
                    size='sm'
                    onClick={() => deleteEvent(event)}
                  >
                    x
                  </Button>
                </div>
              ),
              toolbar: CustomToolbar,
            }}
          />
        </div>

        {/* 날짜추가 모달 */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>일정을 추가해주세요🖊️</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>일정</Form.Label>
                <Form.Control
                  as='select'
                  name='category'
                  value={newEvent.category}
                  onChange={handleInputChange}
                >
                  <option value=''>일정을 선택해주세요</option>
                  <option value='운동'>운동</option>
                  <option value='약'>약</option>
                  <option value='병원'>병원</option>
                  <option value='일상'>일상</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>내용</Form.Label>
                <Form.Control
                  type='text'
                  name='title'
                  value={newEvent.title}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant='primary' onClick={handleAddEvent}>
              Save Event
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Diary;
