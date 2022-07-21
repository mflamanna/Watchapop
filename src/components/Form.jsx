export default function Form (){
    return (
        <div class="h-screen bg-[#F3F4F6] flex justify-center items-center">
	<div class="lg:w-2/5 md:w-1/2 w-2/3">
		<form class="bg-white p-10 rounded-lg shadow-lg min-w-full  shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
			<h1 class="text-center text-2xl mb-6 text-newBlue font-bold font-sans">Order</h1>
			<div>
				<label class="text-newBlue font-semibold block my-3 text-md" for="username">Name</label>
				<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="Name" />
            </div>
            <div>
                <label class="text-newBlue font-semibold block my-3 text-md" for="email">Adress</label>
                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="Adress" />
            </div>
            <div>
                <label class="text-newBlue font-semibold block my-3 text-md" for="password">Phone Number</label>
                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="Phone Number" />
            </div>
            <div>
                <label class="text-newBlue font-semibold block my-3 text-md" for="confirm">Card Number</label>
                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="Card" />
            </div>
                <button type="submit" class="w-full mt-6 mb-3 bg-newYellow rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Buy</button>
		</form>
	</div>
</div>
        )
    }