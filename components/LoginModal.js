import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useState, useEffect} from 'react'

function LoginModal({
    show,
    handleClose,
    handleLogin,
    handleRegister,
    email,
    password,
    setEmail,
    setPassword,
    error,
    isLogin,
    toggleForm
}){
    return (
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isLogin ? 'Login':'Register'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={isLogin ? handleLogin : handleRegister}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} placeholder="Enter email"
                                          onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} placeholder="Password"
                                          onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        {error && <div className="text-danger mb-3">{error}</div>}
                    <div className='text-center mt-2'>
                        <Button variant="primary" type="submit">
                            {isLogin ? 'Login' : 'Register'}
                        </Button>
                    </div>
                    </Form>
                    <div className="text-center mt-3">
                        <Button variant="link" onClick={toggleForm}>
                            {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
    )
}

export default LoginModal;