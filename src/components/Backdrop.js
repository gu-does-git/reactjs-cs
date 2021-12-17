function Backdrop(props) {
	return (
		<div className="backdrop" onCancel={props.onClick}></div>
	);
}

export default Backdrop;