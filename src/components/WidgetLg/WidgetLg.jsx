import "./widgetLg.css"

export default function WidgetLg() {
  
    const Button=({type})=>{
        return <button className={"widgetLgButton "+type}>{type}</button>
    }

    return (
        <div className= "widgetLg">
            <h3 className="widgetLgTitle">
                Latest Transaction
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/9.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Serena Briggs</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">৳ 122.5</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
             
                   
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/10.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Oscar Wilde</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">৳ 122.5</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
             
                   
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/11.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Salman Fardi</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">৳ 122.5</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
             
                   
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mitchell Hannigan</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">৳ 122.5</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
             
                   
                </tr>
            </table>
        </div>
    )
}
