import Container from "@/components/layout/Container";
import { aboutData } from "@/data/about";


export default function Education(){


return(

<section
className="
py-20
bg-[#F8FAF5]
dark:bg-gray-950
"
>


<Container>


<h2
className="
text-center
text-3xl
font-bold
text-[#0F4C3A]
dark:text-green-400
"
>

تحصیلات و مسیر علمی

</h2>



<div
className="
mt-12
grid
gap-6
md:grid-cols-2
"
>


{
aboutData.education.map((item,index)=>(


<div
key={index}
className="
rounded-2xl
border
bg-white
p-6
transition
hover:-translate-y-1
hover:shadow-lg
dark:bg-gray-900
"
>


<div
className="
text-sm
font-bold
text-[#C9A227]
"
>

{item.place}

</div>



<h3
className="
mt-3
text-xl
font-bold
"
>

{item.title}

</h3>


<p
className="
mt-3
leading-8
text-gray-600
dark:text-gray-300
"
>

{item.description}

</p>


</div>


))
}


</div>


</Container>


</section>

)

}