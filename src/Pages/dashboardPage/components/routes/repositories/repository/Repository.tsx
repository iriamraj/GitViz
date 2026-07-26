import { useParams } from "react-router-dom";

export default function Repository() {
	const { repository_name } = useParams();
	return <div>{repository_name}</div>;
}
