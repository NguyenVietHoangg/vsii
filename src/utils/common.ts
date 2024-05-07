export const encodeQueryData = (
  data: { [key: string]: any },
  encode: boolean = true
): string => {
  const ret: string[] = [];
  if (encode) {
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  } else {
    for (let d in data) ret.push(d + '=' + data[d]);
  }
  return ret.join('&');
};

export const makeId = (length: number = 5): string => {
  var result: string = '';
  var characters: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength: number = characters.length;
  for (var i: number = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

interface TreeNode {
  id: string;
  children?: TreeNode[];
}

export const rebuildSelectedParentTree = (
  element: TreeNode,
  nodeSelected: TreeNode
): TreeNode | null => {
  if (element.id && element.id == nodeSelected.id) {
    return nodeSelected;
  } else if (element.children && element.children != null) {
    var i: number;
    var result: TreeNode | null = null;
    for (i = 0; result == null && i < element.children.length; i++) {
      result = rebuildSelectedParentTree(element.children[i], nodeSelected);
    }
    return result;
  }
  return null;
};
