import React, { useState } from 'react';
import styles from './rent.module.css';
const Rent = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        brand: '',
        productType: ''
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validate = () => {
        let tempErrors = {};
        let isValid = true;
        if (formData.name.trim() === "") {
            tempErrors.name = "Ad, Soyad tələb olunur";
            isValid = false;
        }
        if (formData.phone.trim() === "" || !/^[0-9]{10}$/.test(formData.phone)) {
            tempErrors.phone = "Düzgün mobil nömrə daxil edin (10 rəqəm)";
            isValid = false;
        }
        if (formData.email.trim() === "" || !/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Düzgün elektron poçt ünvanı daxil edin";
            isValid = false;
        }
        if (formData.brand.trim() === "") {
            tempErrors.brand = "Brend tələb olunur";
            isValid = false;
        }
        if (formData.productType.trim() === "") {
            tempErrors.productType = "Məhsul növü / Xidmət növü tələb olunur";
            isValid = false;
        }
        setErrors(tempErrors);
        return isValid;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form data saved:", formData);
            alert("Məlumatlar uğurla yadda saxlanıldı!");
        }
    };
    return (
        <div className={styles.formContainer}>
            <h2>İcarə Üçün Müraciət</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ad, Soyad"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.inputField}
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Mobil nömrə"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.inputField}
                    />
                    {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Elektron poçt ünvanı"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.inputField}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="brand"
                        placeholder="Brend"
                        value={formData.brand}
                        onChange={handleChange}
                        className={styles.inputField}
                    />
                    {errors.brand && <p className={styles.error}>{errors.brand}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="productType"
                        placeholder="Məhsul növü / Xidmət növü"
                        value={formData.productType}
                        onChange={handleChange}
                        className={styles.inputField}
                    />
                    {errors.productType && <p className={styles.error}>{errors.productType}</p>}
                </div>
                <button type="submit" className={styles.saveButton}>Save</button>
            </form>
        </div>
    );
};
export default Rent;