export const login = (username, password) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:9090/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON content type
        },
        body: JSON.stringify({ username, password }), // Send username and password as JSON
      });
  
      if (response.ok) {
        const data = await response.json();
        const { details, isAdmin } = data;
        dispatch({ type: 'LOGIN_SUCCESS', payload: { details, isAdmin } });
      } else {
        const errorData = await response.json();
        dispatch({ type: 'LOGIN_FAILURE', payload: errorData.message });
      }
    } catch (error) {
      // Handle any network or other errors here
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };