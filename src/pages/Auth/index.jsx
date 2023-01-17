import React from 'react'
import './Auth.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { Link, NavLink } from 'react-router-dom'

const Auth = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    }
    return (
        <section className={ 'auth' }>
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={ {
                        remember: true,
                    } }
                    onFinish={ onFinish }
                >
                    <Form.Item
                        name="username"
                        // rules={ [
                        //     {
                        //         required: true,
                        //         message: 'Пожалуйста введите логин!',
                        //     },
                        // ] }
                    >
                        <Input size={ 'large' } prefix={ <UserOutlined className="site-form-item-icon"/> }
                               placeholder="Логин"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        // rules={ [
                        //     {
                        //         required: true,
                        //         message: 'Пожалуйста введите пароль!',
                        //     },
                        // ] }
                    >
                        <Input
                            size={ 'large' }
                            prefix={ <LockOutlined className="site-form-item-icon"/> }
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size={'large'} className="button login-form-button">
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    
                    <Form.Item>
                        <NavLink to="register" href={'#'}>Зарегистрироваться</NavLink>
                    </Form.Item>
                </Form>
            </div>
        </section>
    )
}

export default Auth
