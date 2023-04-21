type profilePictureProps = {
    imageUrl: string,
    size: number
}

export function ProfilePicture({ imageUrl, size }: profilePictureProps) {
    return (
        <div
            className="inline-block rounded-full overflow-hidden"
            style={{width:size, height:size}}
        >
            <img className="object-cover w-full h-full" src={imageUrl} alt="Profile Picture" />
        </div>
    );
}
