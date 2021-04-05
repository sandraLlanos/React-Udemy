import React, { useEffect } from 'react'
import './effects.css';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const {name, email, password} = values;

    useEffect( () => {
        console.log('email');
    }, [email]);

    const handleSumbmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <form onSubmit={handleSumbmit}>
            <h1>FormWithCustom</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary" >Save</button>
        </form>
    )
}
