import React from 'react'

function New() {
return (
<div>
<form action='/pokemon' method='Post'>
Name: <input type='text' name="name"/>
<br/>
Image: <input type="text" name="image" />
<br/>
<br/>
<input type="submit" name="" value="Add Pokemon"/>
</form>
</div>
)
}

export default New