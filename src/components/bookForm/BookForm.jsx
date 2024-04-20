import { useState } from "react";
import scss from "./BookForm.module.scss";

const BookForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "+ 996",
    duration: "",
    bookingTime: "",
    numberOfGuests: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      alert("Форма успешно отправлена!");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (formData.fullName && !formData.fullName.trim()) {
      errors.fullName = "Поле ФИО клиента обязательно для заполнения";
    }
    const phoneRegex = /^\+\s\d{3}\s\d{3}\s\d{3}\s\d{3}$/;
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber.trim())) {
      errors.phoneNumber =
        'Номер телефона должен быть в формате "+ 996 706 664 885"';
    }
    if (formData.duration && !formData.duration) {
      errors.duration = "Поле Время нахождения обязательно для выбора";
    }
    if (formData.bookingTime && !formData.bookingTime) {
      errors.bookingTime = "Поле Время брони обязательно для заполнения";
    }
    if (formData.numberOfGuests && !formData.numberOfGuests.trim()) {
      errors.numberOfGuests =
        "Поле Количество гостей обязательно для заполнения";
    }
    return errors;
  };

  return (
    <div className={scss.book}>
      <h1>Бронирование столика</h1>
      <form onSubmit={handleSubmit} className={scss.form}>
        <div>
          <label>ФИО клиента:</label>
          <br />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div>{errors.fullName}</div>}
        </div>
        <div>
          <label>Номер клиента:</label>
          <br />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <div>{errors.phoneNumber}</div>}
        </div>
        <div>
          <label>Время нахождения:</label>
          <br />
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          >
            <option value="">Выберите время нахождения</option>
            <option value="1">1 час</option>
            <option value="2">2 часа</option>
            <option value="3">3 часа</option>
          </select>
          {errors.duration && <div>{errors.duration}</div>}
        </div>
        <div>
          <label>Время брони:</label>
          <br />
          <input
            type="time"
            name="bookingTime"
            value={formData.bookingTime}
            onChange={handleChange}
          />
          {errors.bookingTime && <div>{errors.bookingTime}</div>}
        </div>
        <div>
          <label>Количество гостей:</label>
          <br />
          <input
            type="number"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
          />
          {errors.numberOfGuests && <div>{errors.numberOfGuests}</div>}
        </div>
        <div>
          <label>Комментарий:</label>
          <br />
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Забронировать стол</button>
      </form>
    </div>
  );
};

export default BookForm;
