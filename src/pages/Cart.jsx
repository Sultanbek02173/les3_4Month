
export const Cart = ({cart}) => {
    return (
        <div>
            <h1>Cart</h1>
            {
                cart &&
                cart.map((elem) => (
                    <div>
                        {elem.cont}
                        {elem.title}
                    </div>
                ))
            }
        </div>
    );
}

