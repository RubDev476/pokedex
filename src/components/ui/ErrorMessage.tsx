export default function ErrorMessage({ message }: { message: string }) {
    return(
        <div className="error-message all-center w-full">
            <h2>{message}</h2>
        </div>
    )
}
