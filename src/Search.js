import React, { useState } from "react";
import { Form, Input, Button } from 'reactstrap';


const Search = (props) => {
    const [item, setitem] = useState("");

    const handleSearchInputChanges = (e) => {
        setitem(e.target.value);
    }

    const resetInputField = () => {
        setitem("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(item);
        resetInputField();
    }

    return (
        <Form inline>
            <Input
                value={item}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <Button onClick={callSearchFunction} type="submit" outline color="success">
                movieSearch
            </Button>
        </Form>
    );
}

export default Search;