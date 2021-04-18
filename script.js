
function iva(){
    var iva = 0;
        iva = subtotal * 0.21;
    total();    
}
function total(){
    var camtidad=document.getElementById("cant").value;
    var iva21=document.getElementById("iva").value;
    var subtotal=document.getElementById("subtotal").value;
    var total = iva21 = subtotal * 0.21;

    
}
/*  function calcularSubtotalDetalle(fila) {
            if (cambioManualDetalle) {
                cambioManualDetalle = false;
                var cantidad = document.getElementById('detalle_cantidad' + fila).value * 1;
                var precio = document.getElementById('detalle_precio' + fila).value * 1;
                var subTotalNeto = precio * cantidad;

                var importeBon = document.getElementById('detalle_importe_bonificacion' + fila).value * 1;
                var subtotal1 = subTotalNeto - importeBon;

                var tipoIVA = document.getElementById('detalle_tipo_iva' + fila).value;
                if (isNaN(tipoIVA)) tipoIVA = 0;

                var importeIVA = 0;
                if (tipoIVA == 4)
                    importeIVA = subtotal1 * 0.105;
                else if (tipoIVA == 5)
                    importeIVA = subtotal1 * 0.21;
                else if (tipoIVA == 6)
                    importeIVA = subtotal1 * 0.27;
                else if (tipoIVA == 8)
                    importeIVA = subtotal1 * 0.05;
                else if (tipoIVA == 9)
                    importeIVA = subtotal1 * 0.025;

                if (subtotal1.toFixed) {
                    document.getElementById('detalle_subtotal1' + fila).value = subtotal1.toFixed(2);
                    document.getElementById('detalle_importe_iva' + fila).value = importeIVA.toFixed(2);
                    document.getElementById('detalle_subtotal2' + fila).value = (subTotalNeto - importeBon + importeIVA).toFixed(2);
                } else {
                    document.getElementById('detalle_subtotal1' + fila).value = subtotal1;
                    document.getElementById('detalle_importe_iva' + fila).value = importeIVA;
                    document.getElementById('detalle_subtotal2' + fila).value = subTotalNeto - importeBon + importeIVA;
                }

                calcularTotal();
                cambioManualDetalle = true;
            }
        }

        function calcularTotal() {
            var tbl = document.getElementById('idoperacion');
            var numFilas = tbl.rows.length;
            var fila;
            var totalNetoNoGravado = 0;
            var totalExento = 0;
            var totalNetoGravado = 0;
            var totalIVA27 = 0;
            var totalIVA21 = 0;
            var totalIVA105 = 0;
            var totalIVA5 = 0;
            var totalIVA2 = 0;
            var totalImpuestos = document.getElementById('imptotalimpuestos2').value * 1;
            var total = 0;
            var totalPesos = 0;

            for (var i = 1; i < numFilasDetalles + 1; i++) {
                fila = tbl.rows[i];
                if (fila.cells[8].firstChild.value == "1")
                    totalNetoNoGravado += fila.cells[7].firstChild.value * 1;
                else if (fila.cells[8].firstChild.value == "2")
                    totalExento += fila.cells[7].firstChild.value * 1;
                else if (fila.cells[8].firstChild.value == "3")
                    totalNetoGravado += fila.cells[7].firstChild.value * 1;
                else if (fila.cells[8].firstChild.value == "4") {
                    totalIVA105 += fila.cells[9].firstChild.value * 1;
                    totalNetoGravado += fila.cells[7].firstChild.value * 1;
                }
                else if (fila.cells[8].firstChild.value == "5") {
                    totalIVA21 += fila.cells[9].firstChild.value * 1;
                    totalNetoGravado += fila.cells[7].firstChild.value * 1;
                }
                else if (fila.cells[8].firstChild.value == "6") {
                    totalIVA27 += fila.cells[9].firstChild.value * 1;
                    totalNetoGravado += fila.cells[7].firstChild.value * 1;
                }
                else if (fila.cells[8].firstChild.value == "8") {
                    totalIVA5 += fila.cells[9].firstChild.value * 1;
                    totalNetoGravado += fila.cells[7].firstChild.value * 1;
                }
                else if (fila.cells[8].firstChild.value == "9") {
                    totalIVA2 += fila.cells[9].firstChild.value * 1;
                    totalNetoGravado += fila.cells[7].firstChild.value * 1;
                }
                total += fila.cells[10].firstChild.value * 1;
            }

            if (totalNetoNoGravado.toFixed) {
                document.getElementById("impnetonogravado").value = totalNetoNoGravado.toFixed(2);
                document.getElementById("impexento").value = totalExento.toFixed(2);
                document.getElementById("impnetogravado").value = totalNetoGravado.toFixed(2);
                //recalcularBonificacionForzado();
                document.getElementById("impiva27").value = totalIVA27.toFixed(2);
                document.getElementById("impiva21").value = totalIVA21.toFixed(2);
                document.getElementById("impiva105").value = totalIVA105.toFixed(2);
                document.getElementById("impiva5").value = totalIVA5.toFixed(2);
                document.getElementById("impiva2").value = totalIVA2.toFixed(2);
                //document.getElementById("creditoiva").value = ((totalIVA27+totalIVA21+totalIVA105)*document.getElementById('porcbonifglobal').value/100.0).toFixed(2);
                document.getElementById("imptotal").value = (total/*-valorImporteBonifGlobal + totalImpuestos).toFixed(2);
                if (simboloMoneda != "$") {
                    totalPesos = (document.getElementById("imptotal").value * 1) * tipoCambio;
                    document.getElementById("imptotalpesos").value = totalPesos.toFixed(2);
                }
            }

            else {
                document.getElementById("impnetonogravado").value = totalNetoNoGravado;
                document.getElementById("impexento").value = totalExento;
                document.getElementById("impnetogravado").value = totalNetoGravado;
                document.getElementById("impiva27").value = totalIVA27;
                document.getElementById("impiva21").value = totalIVA21;
                document.getElementById("impiva105").value = totalIVA105;
                document.getElementById("impiva5").value = totalIVA5;
                document.getElementById("impiva2").value = totalIVA2;

                document.getElementById("imptotal").value = total/*-valorImporteBonifGlobal + totalImpuestos;
                if (simboloMoneda != "$") {
                    totalPesos = (document.getElementById("imptotal").value * 1) * tipoCambio;
                    document.getElementById("imptotalpesos").value = totalPesos.toFixed(2);
                }
            }
        }
*/
            /* Shivving (IE8 is not supported, but at least it won't look as awful)
/* ========================================================================== */

(function (document) {
            var
                head = document.head = document.getElementsByTagName('head')[0] || document.documentElement,
                elements = 'article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output picture progress section summary time video x'.split(' '),
                elementsLength = elements.length,
                elementsIndex = 0,
                element;

            while (elementsIndex < elementsLength) {
                element = document.createElement(elements[++elementsIndex]);
            }

            element.innerHTML = 'x<style>' +
                'article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
                'audio[controls],canvas,video{display:inline-block}' +
                '[hidden],audio{display:none}' +
                'mark{background:#FF0;color:#000}' +
                '</style>';

            return head.insertBefore(element.lastChild, head.firstChild);
        })(document);

        /* Prototyping
        /* ========================================================================== */

        (function (window, ElementPrototype, ArrayPrototype, polyfill) {
            function NodeList() { [polyfill] }
            NodeList.prototype.length = ArrayPrototype.length;

            ElementPrototype.matchesSelector = ElementPrototype.matchesSelector ||
                ElementPrototype.mozMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                ElementPrototype.oMatchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                function matchesSelector(selector) {
                    return ArrayPrototype.indexOf.call(this.parentNode.querySelectorAll(selector), this) > -1;
                };

            ElementPrototype.ancestorQuerySelectorAll = ElementPrototype.ancestorQuerySelectorAll ||
                ElementPrototype.mozAncestorQuerySelectorAll ||
                ElementPrototype.msAncestorQuerySelectorAll ||
                ElementPrototype.oAncestorQuerySelectorAll ||
                ElementPrototype.webkitAncestorQuerySelectorAll ||
                function ancestorQuerySelectorAll(selector) {
                    for (var cite = this, newNodeList = new NodeList; cite = cite.parentElement;) {
                        if (cite.matchesSelector(selector)) ArrayPrototype.push.call(newNodeList, cite);
                    }

                    return newNodeList;
                };

            ElementPrototype.ancestorQuerySelector = ElementPrototype.ancestorQuerySelector ||
                ElementPrototype.mozAncestorQuerySelector ||
                ElementPrototype.msAncestorQuerySelector ||
                ElementPrototype.oAncestorQuerySelector ||
                ElementPrototype.webkitAncestorQuerySelector ||
                function ancestorQuerySelector(selector) {
                    return this.ancestorQuerySelectorAll(selector)[0] || null;
                };
        })(this, Element.prototype, Array.prototype);


    
        /* Helper Functions
        /* ========================================================================== */

        function generateTableRow() {
            var emptyColumn = document.createElement('tr');

            emptyColumn.innerHTML = '<td><a class="cut">-</a><span contenteditable></span></td>' +
                '<td><span contenteditable></span></td>' +
                '<td><span contenteditable>0</span></td>' +
                '<td><span data-prefix>$</span><span contenteditable>0.00</span></td>' +
                
                '<td><span data-prefix>$</span><span>0.00</span></td>';

            return emptyColumn;
        }

        function parseFloatHTML(element) {
            return parseFloat(element.innerHTML.replace(/[^\d\.\-]+/g, '')) || 0;
        }

        function parsePrice(number) {
            return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
        }

        /* Update Number
        /* ========================================================================== */

        function updateNumber(e) {
            var
                activeElement = document.activeElement,
                value = parseFloat(activeElement.innerHTML),
                wasPrice = activeElement.innerHTML == parsePrice(parseFloatHTML(activeElement));

            if (!isNaN(value) && (e.keyCode == 38 || e.keyCode == 40 || e.wheelDeltaY)) {
                e.preventDefault();

                value += e.keyCode == 38 ? 1 : e.keyCode == 40 ? -1 : Math.round(e.wheelDelta * 0.025);
                value = Math.max(value, 0);

                activeElement.innerHTML = wasPrice ? parsePrice(value) : value;
            }

            updateInvoice();
        }

        /* Update Invoice
        /* ========================================================================== */

        function updateInvoice() {
            var total = 0;
            var cells, price, total, a, i;

            // update inventory cells
            // ======================

            for (var a = document.querySelectorAll('table.inventory tbody tr'), i = 0; a[i]; ++i) {
                // get inventory row cells
                cells = a[i].querySelectorAll('span:last-child');

                // set price as cell[2] * cell[3]
                price = parseFloatHTML(cells[2]) * parseFloatHTML(cells[3]);

                // add price to total
                total += price;

                // set row total
                cells[4].innerHTML = price;
            }

            // update balance cells
            // ====================

            // get balance cells
            cells = document.querySelectorAll('table.balance td:last-child span:last-child');

            // set total
            cells[0].innerHTML = total;

            // set balance and meta balance
            cells[2].innerHTML = document.querySelector('table.meta tr:last-child td:last-child span:last-child').innerHTML = parsePrice(total - parseFloatHTML(cells[1]));

            // update prefix formatting
            // ========================

            var prefix = document.querySelector('#prefix').innerHTML;
            for (a = document.querySelectorAll('[data-prefix]'), i = 0; a[i]; ++i) a[i].innerHTML = prefix;

            // update price formatting
            // =======================

            for (a = document.querySelectorAll('span[data-prefix] + span'), i = 0; a[i]; ++i) if (document.activeElement != a[i]) a[i].innerHTML = parsePrice(parseFloatHTML(a[i]));
        }

        /* On Content Load
        /* ========================================================================== */

        function onContentLoad() {
            updateInvoice();

            var
                input = document.querySelector('input'),
                image = document.querySelector('img');

            function onClick(e) {
                var element = e.target.querySelector('[contenteditable]'), row;

                element && e.target != document.documentElement && e.target != document.body && element.focus();

                if (e.target.matchesSelector('.add')) {
                    document.querySelector('table.inventory tbody').appendChild(generateTableRow());
                }
                else if (e.target.className == 'cut') {
                    row = e.target.ancestorQuerySelector('tr');

                    row.parentNode.removeChild(row);
                }

                updateInvoice();
            }

            function onEnterCancel(e) {
                e.preventDefault();

                image.classList.add('hover');
            }

            function onLeaveCancel(e) {
                e.preventDefault();

                image.classList.remove('hover');
            }

            function onFileInput(e) {
                image.classList.remove('hover');

                var
                    reader = new FileReader(),
                    files = e.dataTransfer ? e.dataTransfer.files : e.target.files,
                    i = 0;

                reader.onload = onFileLoad;

                while (files[i]) reader.readAsDataURL(files[i++]);
            }

            function onFileLoad(e) {
                var data = e.target.result;

                image.src = data;
            }

            if (window.addEventListener) {
                document.addEventListener('click', onClick);

                document.addEventListener('mousewheel', updateNumber);
                document.addEventListener('keydown', updateNumber);

                document.addEventListener('keydown', updateInvoice);
                document.addEventListener('keyup', updateInvoice);

                input.addEventListener('focus', onEnterCancel);
                input.addEventListener('mouseover', onEnterCancel);
                input.addEventListener('dragover', onEnterCancel);
                input.addEventListener('dragenter', onEnterCancel);

                input.addEventListener('blur', onLeaveCancel);
                input.addEventListener('dragleave', onLeaveCancel);
                input.addEventListener('mouseout', onLeaveCancel);

                input.addEventListener('drop', onFileInput);
                input.addEventListener('change', onFileInput);
            }
        }

        window.addEventListener && document.addEventListener('DOMContentLoaded', onContentLoad);


