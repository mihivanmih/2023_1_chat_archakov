import React from 'react'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const Register = () => {
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    }
    
    const success = true
    
    return (
        <section className={ 'auth' }>
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
                { !success ?
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={ {
                            remember: true,
                        } }
                        onFinish={ onFinish }
                    >
                        <Form.Item
                            name="email"
                            // rules={ [
                            //     {
                            //         required: true,
                            //         message: 'Пожалуйста введите логин!',
                            //     },
                            // ] }
                        >
                            <Input size={ 'large' } prefix={ <MailOutlined className="site-form-item-icon"/> }
                                   placeholder="E-Mail"/>
                        </Form.Item>
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
                        <Form.Item
                            name="password2"
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
                                placeholder="Повторите пароль"
                            />
                        </Form.Item>
            
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size={ 'large' }
                                    className="button login-form-button">
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                    </Form>
                    : <div>
                        <InfoCircleTwoTone style={{ fontSize: '50px', color: '#08c' }} />
                        <h2 style={{  marginTop: '10px' }} >Подтвердите свой аккаунт</h2>
                        <p>На вашу почту отправленно письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                }
            </div>
        </section>
    )
}

export default Register
