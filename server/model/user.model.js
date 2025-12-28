const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAACUCAMAAADifZgIAAAAaVBMVEX///8AAAAEBAT19fVwcHD8/Pz4+Pjs7Ox3d3fR0dGWlpYxMTHV1dV7e3t+fn7h4eFkZGTIyMiFhYVGRkYqKiqnp6eQkJDAwMAlJSUdHR2tra0/Pz/b29uhoaE5OTkNDQ22trZWVlZNTU0TTLGZAAAEGUlEQVR4nO2biXaqMBBAE2KMLAqIouIC+P8f+ZKgiIoYW0ym583teqw9vZ1OJskkJQRBEARBEARBEARBEARB/hzctcD/Ap8yxqZ/JdycS1MRFcFyPpstg8oX/PIgVKSb0vOD5FTShjJMgkhF3rXbS7gOabxYaV+Pel5jvlrErtUG4UTk2tjT7zxlrtVz4VrtJTLQh1oFWQea3nGOoVZCztOa9qHifU4JxCEplaLsMcQd7X0ET1oZRatX0to7PLiWfIYTVrdV4znWKtHPEIN97DfusJbPAmXO+eE0aKzCffJhSUvt+Yuk7movgMVa1Y9hafWaRa417+Hvs1pxhFWzWfImQRoS5lr0jrh8Wfa6WVLCWkel1CjWdONa9IbM1aNBqBVH1643pPXSRFmydO16Q1rPDK1nrl1buLY2yRAPkrV8W5gNRrpwLXtHbpghuWvROwrDWBeuRe/wDes1rIWICI20QwFrHTI3SpAZA2VNNjsD6R2gCV0jkmYJPUgtYO0K9LbxqXfzCKBVSAMXNb32x3qRXzpD65upbtlwgsivHaDt0dViJHijnQPsY/Om+vV66wcXsHZfLWLWbVs/MAdWP26wvDfY8qFyyUD2VEmzEzv1ep/WAHP6iiwR/vxa57yml6p+h4UP1biBk2maPAQ6SadQs6NFHSgVk3243e1223CfFAL4yR25noPJcRmlVVWlESPNvhK49iOcQD1GQpCPuSzu2g/Q0UWk46qvBIAvfe0n96qwrWWpFgd/Ux0DxbHYpAehrlnAtOZNCjO/WCbZtjOf7/bJcu2zy3PgcJtIDvl+VdJnylWW+/qpoLzVABTrrLNzedrK0P1RcEjaKjuiYH9ZofZYe03P4RQcwFirUiG0s3d56bNufpl9oJoLzs2bMVi9OdjtkFXtdznVJvHjNuAl+s8wiYnrcMuoVWZNYNrmd7hxnt0s2FHDs8ZmqMp3u8Bh60wPQ7O+9SMLRlytTZR0ZhzoezJn0eZ6HP5EWn5PHbuacXTx+KE1TWL7e0qVlMz0GLqf+ZQ7KNx88itpjyb8ulK0KF0MHg0YWNO1/TqSbn9p7dGt9burwngaHyARdrWnpsf9w+R2Q52+ukn7GSvfqvXkZ1PiExNrwZY/aGO6zHvLhtiZaVSNPY+jbPN6M1ehHsuaVpZmdf7LWbEjLQfHZGopRfzhq9YfedPQ0qXsaTCatCKwM9GIeqwCoqnt3CpKR1SWeHZmmvVIM8yVtQ1pdUF8VGsLV8nlDnecJciN1fd3vtz4wqE5NhK7GFdZhsBGYv+sbzPE/OvOnNTjKqveyNelOQnHtZaEX7cm3ORq5weoXe+3pTlhpf6P3BGh5bdLnyzX44ZaY8F6Mj7fnhxlXrPxcX10gCAIgiAIgiAIgiAIgiCIA/4B2Mcsnp7lbnAAAAAASUVORK5CYII="
    }
},
{timestamps:true}
);
const User=mongoose.model('User',userSchema);
module.exports=User;